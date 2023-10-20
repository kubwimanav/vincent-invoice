import './singlee.css'
import { FaChevronLeft, FaCircle, FaRegArrowAltCircleLeft } from "react-icons/fa";
function Single () {
  return (
    
    <div>
      <div className='go-back'><b> <FaRegArrowAltCircleLeft className='faicon' />Go back</b></div> 
    <div className="her">
      
    <div className='status'>
      <p>status</p>
      <button className='button'><b><FaCircle className='circle'/>pending</b></button>
    </div>
      <div className='but'>
        <button className='edit'><b>Edit</b></button> 
        <button className='delete'><b>Delete</b></button>
        <button className='mark'><b>Mark as Paid</b></button> 
    </div>
  </div>
  <div className='class'>
    <div className='identifica'>
 <div>
   <p> <b>R777</b></p>
   <p>Re-branding</p>
 </div>
 <div>
  <p>106 Kendel Street,</p>
 <p>Sharrington,</p>
 <p>NR24 5WQ,</p>
 <p>United Kingdom</p>
 </div>

  </div>
  <div className='long-class'>
   <div className='invoice-date'>
     <div>
     <p>invoice date</p>
     <b className='date'>20-10-2023</b>  
     </div>
    
    <div>
      <p>Payement due</p>
      <b className='date'>30-10-2023</b>
    </div>
   </div>
  
    <div>
    <p>Bill To</p>
    <b>Jensen Huang</b>
    <h6>19 Union Terrace,</h6>
    <h6>London,</h6>
    <h6>E1 3EZ,</h6>
    <h6>United Kingdom</h6>
    </div>
    <div>
      <p>Sent to</p>
      <b className='date'>jensenh@mail.com</b>
    </div>
  </div>
  <div>
    
  </div>
  <div  className='fut'>
    <div className='function'>
     <div>
      <p>Item Name</p>
    <h>Brand Guidelines</h>
    </div>
    <div>
    <p>QTY.</p>
    <p><b>1</b></p>
    </div>
    <div>
    <p>Price</p>
    <p><b>£ 1800.9</b></p>
    </div>
    <div>
    <p>Total</p>
    <p><b>£ 1800.9</b></p>
    </div> 
    </div>
    
   <div className='total'>
      <p>Amount Due</p>
      <p><b>£ 1800.9</b></p>
    </div>
  </div>
   
  </div>

</div>
 

  )
} export default Single