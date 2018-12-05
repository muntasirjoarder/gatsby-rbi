import React, {Component} from 'react'

class ContactForm extends Component {
  render(){
      return (
            <div class="form-holder">
                <form>
                    <div class="row">
                        <div class="col-12 text-center">
                            <h2>Lorem Ipsum Dolor</h2>
                        </div>
                        <div class="col-12 form-group">
                            <label>Name</label>
                            <input type="text" name="name" required="" class="form-control" />
                        </div>
                        <div class="col-12 form-group">
                            <label>Email</label>
                            <input type="email" name="email" required="" class="form-control" />
                        </div>
                        <div class="col-12 form-group">
                            <label>Industry segment</label>
                            <input type="text" name="industry" required="" class="form-control" />
                        </div>
                        <div class="col-12 text-center">
                            <button type="submit" class="btn-blue big">Tell me more</button>
                        </div>
                    </div>
                        
                </form>
            </div>
      );
  }
}

export default ContactForm