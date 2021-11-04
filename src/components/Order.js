import React, {useState} from "react";

export default function Order (props) {
    const {cartItems} = props;
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const orderDetails = {name, address, phone};
    const order = {orderDetails:orderDetails, products:cartItems};
    const handleSubmit = (event) => {
        console.log(JSON.stringify(order));
        fetch('http://localhost:8080/api/platform/order', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(order)
        })
    };
    return (
        <div>
            <h2>Order details</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            <div className="row">
                                <div className="col-2">
                                    Enter your name:
                                </div>
                                <div className="col-1 text-right">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            <div className="row">
                                <div className="col-2">
                                    Enter delivery address:
                                </div>
                                <div className="col-1 text-right">
                                    <input
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            <div className="row">
                                <div className="col-2">
                                    Enter your phone number:
                                </div>
                                <div className="col-1 text-right">
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                        </label>
                     </div>
                    <input type="submit" />
                </form>
          </div>
      </div>
    );
}