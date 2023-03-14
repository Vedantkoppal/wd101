let userform = document.getElementById('userform');

const RetrieveEntries = () => {
  let entries = localStorage.getItem("UserEntries");
  if (entries) {
    entries = JSON.parse(entries);
  } else {
    entries = [];
  }
  return entries;
}

let UserEntries = RetrieveEntries();

const displayEntries = () => {
  const entries = RetrieveEntries();

  const TableEntries = entries.map((entry) => {
    const nameCell = `<td class='border px-4 py-2'> ${entry.name}</td>`;
    const emailCell = `<td class='border px-4 py-2'>${entry.email}</td>`;
    const passwordCell = `<td class='border px-4 py-2'>${entry.password}</td>`;
    const dobCell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
    const acceptTermsCell = `<td class='border px-4 py-2'>${entry.acceptTerms}</td>`;
    const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
    return row;
  }).join("\n");

  const table = `<table class="table-auto w-full">
       <tr>
        <th style="border-bottom: 1px solid black;" class="px-4 py-2">Name</th>
        <th style="border-bottom: 1px solid black;" class="px-4 py-2">Email</th>
        <th style="border-bottom: 1px solid black;" class="px-4 py-2">Password</th>
        <th style="border-bottom: 1px solid black;" class="px-4 py-2">DOB</th>
        <th style="border-bottom: 1px solid black;" class="px-4 py-2">Accepted Terms?</th>
        </tr>${TableEntries}
    </table>`;
  let details = document.getElementById("UserEntries");
  details.innerHTML = table;
}

const saveUserForm = (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const acceptTerms = document.getElementById('acceptTerms').checked;

  const entry = {
    name: name,
    email: email,
    password: password,
    dob: dob,
    acceptTerms: acceptTerms
  };
  UserEntries.push(entry);
  localStorage.setItem("UserEntries", JSON.stringify(UserEntries));
  displayEntries();
}

userform.addEventListener('submit', saveUserForm);
displayEntries();
