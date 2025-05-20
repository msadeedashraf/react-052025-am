import React from 'react'

const Contactus = () => {
  return (
    <div>  
        <main>
        <section id="contact-frm-sec">
            <h2>Contact Us</h2>
            <div class="frm-div">
                <form action="" id="contact-frm">

                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required />
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                    <input class="my-btn" type="submit" value="Submit" />
                </form>
            </div>

        </section>

    </main>
      
    </div>
  )
}

export default Contactus
