import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCartHook from "../../../Hooks/useCartHook";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [paymentIntertId, setPaymentIntertId] = useState("");
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCartHook();
  const navigate = useNavigate();
  const cartPrice = cart?.data?.[0]?.userFoods?.reduce(
    (total, item) => total + item.price,
    0
  );

  useEffect(() => {
    if (cartPrice > 0) {
      axiosSecure
        .post("/payment/create-payment-intent", { price: cartPrice })
        .then((res) => {
          setClientSecret(res.data.data.clientSecret);
        });
    }
  }, [axiosSecure, cartPrice]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      // console.log(`[error]`, error);
      setError(error.message);
    } else {
      // console.log(`[paymentMethod]`, paymentMethod);
      setError("");
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.userName,
          },
        },
      });
    if (confirmError) {
      // console.log("confirmError", confirmError);
      toast.error("Payment Faild");
    } else {
      // console.log("paymentIntent data:", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setPaymentIntertId(paymentIntent.id);
        toast.success("Payment Successfull");
        const userPayment = {
          email: user?.email,
          price: cartPrice,
          date: new Date(),
          cartIds: cart?.data?.[0].userFoods.map((item) => item._id),
          menuItemIds: cart?.data?.[0].userFoods.map((item) => item.menuId),
          status: "pending",
          paymentId: paymentIntent.id,
        };
        axiosSecure.post("/payment/userpayment", userPayment).then((res) => {
          if (res.data.statusCode === 200) {
            refetch();
            navigate("/dashboard/paymenthistory");
          }
        });
      }
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
        {error ? <span className="text-red-500 text-sm">{error}</span> : ""}
        {paymentIntertId ? (
          <span className="text-green-500 text-sm block my-3">
            My PaymentId:{paymentIntertId}
          </span>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default CheckOutForm;
