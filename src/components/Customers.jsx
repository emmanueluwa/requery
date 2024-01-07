import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Customers = () => {
  // const { data, error, isLoading } = useQuery({
  const customerQuery = useQuery({
    //query keys can be shared around application
    queryKey: ["customers"],
    queryFn: () => {
      return axios("http://127.0.0.1:3000/api/customers");
    },
  });

  if (customerQuery?.isLoading) {
    return <h3>loading...</h3>;
  }

  if (customerQuery?.data?.data?.customers) {
    return (
      <div className="">
        {customerQuery.data.data.customers.map((customer) => {
          return <p key={customer._id}>{customer.name}</p>;
        })}
      </div>
    );
  }

  return (
    <>
      <div></div>
    </>
  );
};

export default Customers;
