import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Profile.css";
import { Form } from "react-bootstrap";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="profile-container">
          <h1 style={{ fontFamily: "jua", color: "#bc6c25", paddingTop: "1rem" }}>Profile</h1>
          <hr />
        </div>
        <div className="text-left mb-2">
          <img src="profile.png" alt="Profile" className="rounded-circle" width={75} height={75} />
        </div>

        <div className="card-border text-left">
          <div className="text-left">
            {/* <div className="card-body"> */}
            <Form.Group controlId="username">
              <Form.Label>Nama Pengguna</Form.Label>
              <Form.Control style={{ marginBottom: "2rem", padding: "1rem", borderRadius: "10px", width: "350px" }} type="text" placeholder="Masukkan nama pengguna" required />
            </Form.Group>
            <Form.Group controlId="password" style={{ paddingBottom: "2rem", width: "350px" }}>
              <Form.Label>Kata Sandi</Form.Label>
              <div className="password-container">
                <Form.Control type="password" style={{ padding: "1rem", borderRadius: "10px" }} placeholder="Masukkan kata sandi" required />
                <span className="toggle-password"></span>
              </div>
            </Form.Group>
            <Form.Group controlId="telepon">
              <Form.Label>Nomor Telepon</Form.Label>
              <Form.Control style={{ marginBottom: "1rem", padding: "1rem", borderRadius: "10px", width: "350px" }} type="text" placeholder="Masukkan nomor telepon" required />
            </Form.Group>
            <Form.Group controlId="username">
              <Form.Label>Alamat</Form.Label>
              <Form.Control style={{ marginBottom: "2rem", padding: "1rem", borderRadius: "10px", width: "350px" }} type="text" placeholder="Jl. Prof. Dr. Ir. Sumantri Brojonegoro No.1, Gedong lepon" required />
            </Form.Group>
          </div>

          {/* form lama  */}
          {/* <form>
            <div className="form-group text-left">
              <label>Nama Pengguna</label>
              <input type="text" className="form-control" value="Dimas Nugraha" readOnly />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" value="dimasnug@gmail.com" readOnly />
            </div>
            <div className="form-group">
              <label>Nomor Telepon</label>
              <input type="text" className="form-control" value="0987678987633" readOnly />
            </div>
            <div className="form-group">
              <label>Alamat</label>
              <textarea className="form-control" rows="3" readOnly>
                Jl. Prof. Dr. Ir. Sumantri Brojonegoro No.1, Gedong Meneng, Kec. Rajabasa, Kota Bandar Lampung, Lampung
              </textarea>
            </div>
          </form> */}
          {/* </div> */}
        </div>
        <div className="text-right" padding="1rem">
          <button type="button" className="btn btn-primary ">
            Edit Profil
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
