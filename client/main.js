import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.form.helpers({
  result: function() {

    const length = Template.form.length.get()
    const weigth = Template.form.weigth.get()


    const bmi = weigth / (length * length).toFixed(2)
    console.log(bmi)

    if (bmi < 18.5) {
      return bmi + "ondergewicht"
    }
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
	Template.form.length = new ReactiveVar({});
	Template.form.weigth = new ReactiveVar({});
});