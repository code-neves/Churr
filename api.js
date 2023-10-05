const api = {

    getAddressByPostalCode:  async (cep) => {
 
     const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
     
     const config = {
         method: "GET",
         headers: {
             "Content-Type": "application/json",
           }
     }
 
     const response = await fetch(endpoint, config);
        return await response.json();
    }
 }

 // Function to save customer data in localStorage
function saveCustomerData(customerData) {
    localStorage.setItem("customer", JSON.stringify(customerData));
  }
  
  // Function to load customer data from localStorage and populate the form inputs
  function loadCustomerData() {
    const storedCustomer = JSON.parse(localStorage.getItem("customer"));
    if (storedCustomer) {
      nameInput.value = storedCustomer.name;
      emailInput.value = storedCustomer.email;
      cepInput.value = storedCustomer.cep;
    }
  }
  
  // Call the loadCustomerData function to populate the form if data is present in localStorage
  loadCustomerData();
  
  function register() {
    const cep = document.getElementById("cepInput").value;
    console.log(cep);
  
    // Clear previous customer data in localStorage
    localStorage.removeItem("customer");
  
    api.getAddressByPostalCode(cepInput.value)
      .then((response) => {
        // Access the desired properties from the response JSON
        const logradouro = response.logradouro;
        const bairro = response.bairro;
        const localidade = response.localidade;
        const uf = response.uf;
  
        // Print or use these properties as needed
        console.log("Logradouro: " + logradouro);
        console.log("Bairro: " + bairro);
        console.log("Localidade: " + localidade);
        console.log("UF: " + uf);
  
        // Save the customer data in localStorage
        const customerData = { name: nameInput.value, email: emailInput.value, cep: cepInput.value, logradouro, bairro, localidade, uf };
        saveCustomerData(customerData);
  
        alert("Customer " + response.name + " registered");
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  
  const customer = {
    name: nameInput.value,
    email: emailInput.value,
    cep: cepInput.value
  };
  
  console.log(localStorage.getItem("customer"));
  