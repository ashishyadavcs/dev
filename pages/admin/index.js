import React from "react";
import { FcPhone } from "react-icons/fc";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import moment from "moment";
const Page = ({ order }) => {
  return (
    <div className="container my-3">
      <div className="shadow p-2">
        <h1>Dashboard- client details</h1>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="shadow  p-2">
            <ul className="list-unstyled">
              {[...Array(20)].map((id) => {
                return (
                  <li
                    key={Math.random() * 100}
                    className="mb-2 text-secondary py-1 border-bottom"
                  >
                    <FaUserCircle size={20} /> <span>Ashish Kumar</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <div className="table-responsive orders">
            <table className="table table-bordered overflow-auto">
              <thead>
                <tr>
                  <th className="p-2">Order id</th>
                  <th className="p-2">Description</th>
                  <th className="p-2">Image</th>
                  <th className="p-2">Mobile Number</th>
                  <th className="p-2">Date created</th>
                </tr>
              </thead>
              <tbody>
                {order?.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>#{item._id}</td>
                      <td>
                        <CgDetailsMore size={20} />
                        {item.description}
                      </td>
                      <td>{item.image}</td>
                      <td>
                        <a href={`tel:${item.mobile}`}>
                          <FcPhone size={20} />
                          {item.mobile}
                        </a>
                      </td>
                      <td>
                        <BsFillCalendarCheckFill size={20} />
                        {moment(item?.date).format("LL")}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/order`);
  try {
    const data = await req.json();
    return {
      props: {
        order: data,
      },
    };
  } catch (err) {
    return {
      props: {},
    };
  }
}
export default Page;
