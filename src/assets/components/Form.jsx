
import { useState } from 'react'
import './form.css'

function Form (){
  const[name,setName]=useState('')
  const[city,setCity]=useState('')
  const[PostCode,setPostcode]=useState('')
  const[streetaddress,setStreetaddress]=useState('')
  const[country,setCountry]=useState('')
  const[clientname,setClientname]=useState('')
  const[clientemail,setClientemail]=useState('')
  const[invoicedate,setInvoicedate]=useState('')
  const[status,setStatus]=useState('')
  const[invoices,setInvoices]=useState([])

function handlesubmit(e){
  e.preventDefault()
  const formdata={name,city,PostCode,streetaddress,country,clientname,clientemail,invoicedate,status}
  console.log(formdata)
  setInvoices([...invoices,formdata])
}

  return(

    <div>
 <form onSubmit={handlesubmit} >
    <div className="containe">
    {invoices.map((item)=>(
  <>
  <h1>{item.name}</h1>
  <h1>{item.clientemail}</h1>
  <h1>{item.clientname}</h1>

  </>
))}
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
                  <option value="net-30">Net 15 Days</option>
                  <option value="net-60">Net 45 Days</option>
                  <option value="net-90">Net 60 Days</option>

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
            ></input>
          </div>
        </div>
        <div className="vim">
          <button className="vincen"> 
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
  )
} export default Form