import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.form.helpers({
  result: function() {

    const length = Template.form.length.get()
    const weigth = Template.form.weigth.get()

    if(length == '' && weigth == '') {
      return null
    } else {

    const x = weigth / (length * length)
    const bmi = x.toFixed(2)

    if (!x) {
      Bert.alert( 'Error', 'danger', 'growl-top-right' );
      return null
    }

    if (bmi < 18.5) {
      return bmi + " ondergewicht"
    } else if (bmi < 24.9) {
      return bmi + " normaal"
    } else if (bmi < 29.9) {
      return bmi + " overgewicht"
    } else if (bmi < 34.9) {
      return bmi + " obesitas"
    } else if (bmi > 35) {
      return bmi + " extreme obesitas"
    } 

    }

    Template.form.length.set('')
    Template.form.weigth.set('')
    
  },
});

Template.form.events({
  'submit .input-form': (event) => {

    event.preventDefault();

    const target = event.target

    const length = target.length.value
    const weigth = target.weigth.value

    Template.form.length.set(length)
    Template.form.weigth.set(weigth)

  }
});

Template.form.onCreated(function () {
	Template.form.length = new ReactiveVar('');
	Template.form.weigth = new ReactiveVar('');
});