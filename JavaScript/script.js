const form = document.getElementById("form")  
          
          form.addEventListener("submit", event => {
              
              event.preventDefault()
                
              let userFormData = new FormData(event.target)
            
              let userName = userFormData.get("userName")
              
              let userEmail = userFormData.get("userEmail")
              
              let updatedHtmlContent = `
                    <h2>Congratulations, ${userName}!</h2>

                    <p>You're on your way to becoming a BBQ Master!</p>
                    
                    <p class="fine-print">We have sent event information to ${userEmail}</p>
                `
                let newMainContent = document.getElementById("main-content")
                
                newMainContent.innerHTML = updatedHtmlContent
          })