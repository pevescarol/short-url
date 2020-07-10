const renderResponse = (res) => {
    if(res.errors){
      responseField.innerHTML = "<p>Lo sentimos, no pudimos formatear tu URL.</p><p>Intentalo de nuevo.</p>";
    } else {  
      responseField.innerHTML = `<p>Tu nueva url es: </p><p> ${res.shortUrl} </p>`;
    }
  }
  

  const renderRawResponse = (res) => {
    if(res.errors){  
      responseField.innerHTML = "<p>Lo sentimos, no pudimos formatear tu URL.</p><p>Intentalo de nuevo.</p>";
    } else {
      let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
      structuredRes = `<pre>${structuredRes}</pre>`;
      responseField.innerHTML = `${structuredRes}`;
    }
  }
  

  const renderJsonResponse = (response) => {
    let rawJson = {}
    for(let key in response){
      rawJson[key] = response[key]
    }

    rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n")
    responseField.innerHTML = `<pre>${rawJson}</pre>`
  }
  