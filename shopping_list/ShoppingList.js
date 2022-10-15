let inputTag = document.getElementsByClassName('form-control')[0];
const spanContainer = document.getElementsByClassName("spanContainer")[0];
let productId = 1;
const handalchange = (event) => {
    const inputValue = event.target.value;

    const spanItem = document.createElement('span');
    spanItem.classList.add("userslelct");
    spanItem.id = productId;
    const spanParentDiv = document.createElement('div');
    spanParentDiv.classList.add("product");
    const grandparentDiv = document.createElement('div');

    spanItem.addEventListener("click", () => {
        const classExist = spanItem.classList.contains("linethrow");
        if (classExist) {
            spanItem.classList.remove("linethrow");
        } else {
            spanItem.classList.add("linethrow");
        }
    });

    const trashicon = document.createElement("i");
    trashicon.classList.add("fa-solid", "fa-trash-can", "icontrash");

    trashicon.addEventListener("click", () => {
        grandparentDiv.remove();
    })

    grandparentDiv.append(spanParentDiv, trashicon);
    spanContainer.append(grandparentDiv);
    spanParentDiv.append(spanItem);
    let product = productId + ". " + inputValue;
    spanItem.append(product);
    inputTag.value = "";
    productId += 1

}


inputTag.addEventListener("change", handalchange);