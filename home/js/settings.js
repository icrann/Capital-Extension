const engineForm = document.getElementById("engineForm")

engineForm.onsubmit = (e) => {
    e.preventDefault()
    const engineVal = document.getElementById("engine").value
    localStorage.setItem("engine", engineVal)
}