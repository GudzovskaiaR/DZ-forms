const form = document.main;
function clearErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => (element.innerHTML = ""));
}
function isExist(name) {
  if (form[name].value) return true;
  const errorElement = form[name].parentElement.querySelector(".error");
  errorElement.innerText = `${name} is required`;
  return false;
}
function isValue(name) {
  if (form[name].value == "33") return true;
  const errorElementResult = form[name].parentElement.querySelector(".error");
  errorElementResult.innerText = "Result is wrong";
  return false;
}
function handleLogin(event) {
  event.preventDefault();
  clearErrors();

  let errorsStatuses = [];
  errorsStatuses.push(!isValue("Result"));

  errorsStatuses.push(
    ...["Name", "E-mail", "Result"].map((name) => !isExist(name))
  );
  console.log(errorsStatuses);

  if (!errorsStatuses.filter(Boolean).length) {
    console.log("send data to server");
  }
}
form.addEventListener("submit", handleLogin);
