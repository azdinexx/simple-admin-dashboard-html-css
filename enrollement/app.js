const Accept = document.querySelectorAll('.accept');
const Decline = document.querySelectorAll('.decline');
const info = document.querySelectorAll('.info');

const AcceptButtons = Array.from(Accept);
AcceptButtons.forEach((elt) => {
  elt.addEventListener('click', () =>
    document.getElementById('Dialog').showModal()
  );
});

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
