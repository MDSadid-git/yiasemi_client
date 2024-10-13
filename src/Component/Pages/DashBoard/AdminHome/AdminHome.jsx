import { useQuery } from "@tanstack/react-query";
import useAdmin from "../../../Hooks/useAdmin";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaBook, FaUsers, FaWallet } from "react-icons/fa";
import { FaBucket } from "react-icons/fa6";
import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLOR = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const [isAdmin, isAdminPending, refetch, user] = useAdmin();
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["admin-and-order-stats"],
    queryFn: async () => {
      const [adminStats, orderStats] = await Promise.all([
        axiosSecure.get("/users/admin-stats"),
        axiosSecure.get("/users/order-stats"),
      ]);
      return {
        adminStats: adminStats.data,
        orderStats: orderStats.data,
      };
    },
  });

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // all about payCart

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const paycartData = data?.orderStats?.data?.map((item) => ({
    name: item.category,
    value: item.totalRevenue,
  }));
  console.log(paycartData);

  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold">
          Hi Welcome {useAdmin ? user.userName : "Back"}
        </h2>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-7 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 w-full p-4">
              <div class="bg-gray-100 p-6 rounded-lg flex items-center justify-center gap-3 w-full">
                <div>
                  <FaWallet className="text-xl" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">
                    {data?.adminStats?.data?.revenue}
                  </h2>
                  <h2 className="font-semibold text-lg">Revenue</h2>
                </div>
              </div>
            </div>

            <div class="xl:w-1/4 md:w-1/2 w-full p-4">
              <div class="bg-gray-100 p-6 rounded-lg flex items-center justify-center gap-3 w-full">
                <div>
                  <FaUsers className="text-2xl" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">
                    {data?.adminStats?.data?.allUser}
                  </h2>
                  <h2 className="font-semibold text-lg">All User</h2>
                </div>
              </div>
            </div>

            <div class="xl:w-1/4 md:w-1/2 w-full p-4">
              <div class="bg-gray-100 p-6 rounded-lg flex items-center justify-center gap-3 w-full">
                <div>
                  <FaBook className="text-xl" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">
                    {data?.adminStats?.data?.allMenu}
                  </h2>
                  <h2 className="font-semibold text-lg">All Menu</h2>
                </div>
              </div>
            </div>

            <div class="xl:w-1/4 md:w-1/2 w-full p-4">
              <div class="bg-gray-100 p-6 rounded-lg flex items-center justify-center gap-3 w-full">
                <div>
                  <FaBucket className="text-xl" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">
                    {data?.adminStats?.data?.allOrders}
                  </h2>
                  <h2 className="font-semibold text-lg">All Orders </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="md:flex">
        <div className="w-full md:w-1/2">
          <BarChart
            width={500}
            height={300}
            data={data?.orderStats?.data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data?.orderStats?.data?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-full md:w-1/2">
          <PieChart width={400} height={400}>
            <Pie
              data={paycartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {paycartData?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLOR[index % COLOR.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
