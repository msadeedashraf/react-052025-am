import React from 'react'

const Jobsearch = () => {
  return (
    <div>
     <main>
        <section id="contact-frm-sec">
            <h2>Find your dream job</h2>
            <div class="frm-div">
                <form action="" id="contact-frm">
                    <input type="text" name="Keywords" id="Keywords" placeholder="Enter text to search"/>
                    <input type="text" name="location" id="location" placeholder="Enter location"/>
                    <select name="category" id="category">
                    <option value="">All Categories</option>
                    <option value="">IT</option>
                    <option value="">Finance</option>
                    <option value="">Marketing</option>
                    </select>
                    <input type="submit" value="Search Jobs"/>
                </form>
            </div>

        </section>

    </main>
      
    </div>
  )
}

export default Jobsearch
