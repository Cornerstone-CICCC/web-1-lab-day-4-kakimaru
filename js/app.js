const form = document.querySelector("form");
const employeeListTable = document.getElementById("employeeList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const firstNameValue = formData.get("firstname");
  const lastNameValue = formData.get("lastname");
  const emailValue = formData.get("email");
  const dateValue = formData.get("hire_date");
  const photoData = formData.get("photo").name;

  const tableItem = document.createElement("tr");
  tableItem.innerHTML = `
      <td><img src="/images/${photoData}" /></td>
      <td>${firstNameValue}</td>
      <td>${lastNameValue}</td>
      <td>${emailValue}</td>
      <td>${dateValue}</td>
      <td><button value="delete" class="deleteBtn">Delete</button></td>
  `;
  
  // delete button
  const deleteBtn = tableItem.querySelector(".deleteBtn");
  
  employeeListTable.append(tableItem);
  form.reset();
  
  deleteBtn.addEventListener("click", (e) => {
    if (confirm("Are you sure you want to delete this employee?"))
    tableItem.remove();
  });
});
