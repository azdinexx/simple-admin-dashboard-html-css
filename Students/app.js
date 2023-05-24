const Decline = document.querySelectorAll('.decline');
const info = document.querySelectorAll('.info');
const Enrolled = document.querySelectorAll('.enrolled');

const DeclineButtons = Array.from(Decline);
DeclineButtons.forEach((elt) => {
  elt.addEventListener('click', () =>
    document.getElementById('Dialog').showModal()
  );
});

const InfoButtons = Array.from(info);
InfoButtons.forEach((elt) => {
  elt.addEventListener('click', () =>
    document.getElementById('InfoDialog').showModal()
  );
});

const EnrolledButtons = Array.from(Enrolled);
EnrolledButtons.forEach((elt) => {
  elt.addEventListener('click', () =>
    document.getElementById('CoursesDialog').showModal()
  );
});
