import '../OrderComponent.css';
import '../Order.css';
function OrderComponent({ orderData }) {
    let dataArray = [];
    for (let k in orderData) {
        dataArray.push(orderData[k]);
    }
    const [date] = dataArray.splice(dataArray.length - 2, 2);
    return (
    <div className="order-containers">
            <div className='date-container'>
                <h3>Status:Delivered</h3>
                <h3>Order Date {orderData.date}</h3>
            </div >
            {dataArray.map((index) =>
                <div className='new-order'>

                    <div className='orders'>
                        <img src={index.data.volumeInfo.imageLinks.thumbnail} alt="hello" ></img>
                        <div className='order-content'>
                            <h1>{index.data.volumeInfo.title}</h1>
                            <p><b>Author:</b>{index.data.volumeInfo.authors.join(", ")}</p>
                            <p><b>Price:</b>{index.data.saleInfo.retailPrice.amount}</p>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}






export default OrderComponent