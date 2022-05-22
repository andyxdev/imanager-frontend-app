import { useEffect, useState } from "react";
import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Forms from "../components/Form";
import { Link } from "react-router-dom";

const Installation = () => {
  /* const params = useParams();
  const [record, setRecord] = useState([]);

  useEffect(() => {
    getData();
  }, [params.id]);

  const getData = async () => {
    const response = await fetch(`/api/installations/${params.id}`);
    const data = await response.json();
    setRecord(data);
  };
  const createInstallation = async () => {
    fetch(`/api/installations/`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(record),
    });
  };

  const navigate = useNavigate();
  const onSubmit = () => {
    createInstallation();
  }; */
  return (
    <div class="col main pt-5 mt-3">
      <hr />

      <div class="row ">
        <div class="col-lg-10 col-md-8 col-sm-12">
          <h5 class="mt-3 mb-3 text-secondary">Installations</h5>
          <div>
            <Forms />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
