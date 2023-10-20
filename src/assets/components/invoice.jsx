import React, { useState } from 'react';
import "./invoice.css";
import { FaCheck, FaChevronLeft, FaChevronRight, FaCircle, FaPlus } from "react-icons/fa";
import Form from './Form';
import { Link } from 'react-router-dom';
import Single from './Hd1';

const Invoice = () => {
  const[name,setName]=useState('')
  const[city,setCity]=useState('')
  const[PostCode,setPostcode]=useState('')
  const[streetaddress,setStreetaddress]=useState('')
  const[country,setCountry]=useState('')
  const[clientname,setClientname]=useState('')
  const[clientemail,setClientemail]=useState('')
  const[invoicedate,setInvoicedate]=useState('')
  const[status,setStatus]=useState('pending')
  const[invoices,setInvoices]=useState([])

function handlesubmit(e){
  e.preventDefault()
  const formdata={name,city,PostCode,streetaddress,country,clientname,clientemail,invoicedate,status}
  console.log(formdata)
  setInvoices([...invoices,formdata])
  setOpen(false)
}


 
  const [open, setOpen] = useState(false);
  function openForm() {
    setOpen((prevOpen) => !prevOpen);
  }


  return (

    <div className="container">
      <div className="combined-title">
        <div className="title-invoice">
          <h1 className="sub-title">Invoices</h1>
          <p className='pl'>There are 
            17 total <br />
            invoices </p>
        </div>
        <div className="title-invoice status">
          <div class="horizontal-container">
            <p className="pl">Filter By status <FaCheck className="plus" /></p>
            <button className="invoice-btn" onClick={openForm}>
            <FaPlus className="plus-icon" />  <h1>New Invoice </h1>
            </button>
          </div>
        </div>
      </div>
      
      <div className="container-fluid">
        <Link to={"/paid"}>
          {invoices.map((invoice, index) => (
            <div key={index} className="invoice-container">
              
                <p className="invoice-name">{invoice.name}</p>
               
                <p className="invoice-date">due: {invoice.invoicedate}</p>
          
                <p className="invoice-author"> {invoice.clientname}</p>
        
                <p className="invoice-name">{invoice.PostCode}</p>
              
          
                  <button className="status-button">
                    <button className={`text ${invoice.status.toLowerCase()}`}>
                    <FaCircle className='circle'/> <b>{invoice.status}</b>
                    </button>
                    
                  </button>
          
                 {/* <FaChevronRight className="pluss" /> */}
                 
            </div>
           
          ))}
           </Link>
        </div>
      {open  &&(
       <div>
       <form onSubmit={handlesubmit} >
          <div className="containe">
            <div action="#">
              <h2 className="bill">Bill From</h2>
              <div className="cardholder-name">
                <label htmlFor="" className="label-default">
                  Street Address
                </label>
                <div></div>
      
                <input 
                  type="text"
                  name="name" 
                  className="input-field"
                  placeholder="kigali"
                  onChange={(e)=>setName(e.target.value)}
                ></input>
              </div>
      
              <div class="input-flex">
                <div class="expire-date">
                  <label for="expire-date" class="label-default">
                    City
                  </label>
                  <div class="input-flex">
                    <input type="text" class="input-default" placeholder="london" onChange={(e)=>setCity(e.target.value)}/>
                  </div>
                </div>
                <div>
                <div>
                      <label for="expire-date" class="label-default">
                        PostCode
                      </label>
                      <input type="text" placeholder="BD19PB" class="input-default" onChange={(e)=>setPostcode(e.target.value)}/>
                    </div>
                </div>
                <div class="cvv">
                  <label for="cvv" class="label-default">
                    Country
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    class="input-default"
                    placeholder="Germany"
                    onChange={(e)=>setCountry(e.target.value)}
                  />
                </div>
              </div>
            </div>
      
            <div>
              <h2 className="bill">Bill To</h2>
              <div className="cardholder-name">
                <label htmlFor="" className="label-default">
                  Client's Name
                </label>
                <input
                  type="text"
                  name="cardholder-name"
                  className="input-field"
                  placeholder=" Vincenzo"
                  onChange={(e)=>setClientname(e.target.value)}
                ></input>
              </div>
      
              <div className="cardholder-name">
                <label htmlFor="" className="label-default">
                  Client's email
                </label>
                <input
                  type="text"
                  name="cardholder-name"
                  className="input-field"
                  placeholder="alexgrim@gmail"
                  onChange={(e)=>setClientemail(e.target.value)}
                ></input>
                <div className="cardholder-name">
                  <label htmlFor="" className="label-default">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="cardholder-name"
                    className="input-field"
                    placeholder="64 Grass Way"
                    onChange={(e)=>setStreetaddress(e.target.value)}
                  ></input>
      
                  <div class="input-flex">
                    <div class="expire-date">
                      <label for="expire-date" class="label-default">
                        City
                      </label>
                      <div class="input-flex">
                        <input
                          type="text"
                          class="input-default"
                          placeholder="Liverpool"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="expire-date" class="label-default">
                        PostCode
                      </label>
                      <input type="text" placeholder="BD19PB" class="input-default" />
                    </div>
                    <div class="cvv">
                      <label for="cvv" class="label-default">
                        Country
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        class="input-default"
                        placeholder="Germany"
                        onChange={(e)=>setCountry(e.target.value)}
                      />
                    </div>
                  </div>
      
                  
                    <div class="expire-date">
                      <label for="expire-date" class="label-default">
                        Invoice Date
                      </label>
                      <div class="input-flex">
                        <input
                          type="date"
                          class="input-default"
                          id="expire-date"
                          placeholder="Select a date"
                          onChange={(e)=>setInvoicedate(e.target.value)}
                        />
                      </div>
                    </div>
      
                    <div>
                      <label for="expire-date" class="label-default">
                        Payment Terms
                      </label>
                       
                      <select id="expire-date" class="input-default" onChange={(e)=>setStatus(e.target.value)}>
                     

                        <option value="pending">pending</option>
                        <option value="paid">paid</option>
                        <option value="draft">draft</option>
      
                      </select>
                    </div>
                
                  <label htmlFor="" className="label-default">
                    Project Description
                  </label>
                  <input
                    type="text"
                    name="cardholder-name"
                    className="input-field"
                    placeholder="Graphic Design"
                  />
                </div>
              </div>
              <div className="vim">
                <button  type='button' onClick={openForm} className="vincen"> 
                  <h1>cancel</h1>
                </button >
                <button className="vincent">
                  <h1>save changes</h1>
                </button>
              </div>
            </div>
          </div>
          </form>
          </div>
      )}

      
    </div>
  );
};

export default Invoice;
