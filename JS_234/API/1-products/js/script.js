import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    updateProduct,
} from "./products-api.js";
const frmProduct = document.getElementById("frmProduct");
const txtTitle = document.getElementById("txtTitle");
const txtPrice = document.getElementById("txtPrice");
const txtImage = document.getElementById("txtImage");
const txtCategory = document.getElementById("txtCategory");
const txtDesc = document.getElementById("txtDesc");
const hdnId = document.getElementById("hdnId");
const tbody = document.querySelector("#tblProducts tbody");
const renderProductList = (products) => {
    let strProducts = "";
    products.forEach((item, index) => {
        strProducts += `
            <tr data-id="${item.id}">
                <th scope="row">${index + 1}</th>
                <td><img src="${
                    item.image
                }" class="img-fluid" width="100"/></td>
                <td>${item.title}</td>
                <td>${item.price}</td>
                <td>
                    <button class="btn btn-link btn-edit text-decoration-none">✏️</button>
                    <button class="btn btn-link btn-del text-decoration-none">🗑️</button>
                </td>
            </tr>`;
    });
    tbody.innerHTML = strProducts;
};
const init = async () => {
    const products = await getAllProducts();
    renderProductList(products);
};
const editProduct = async (id) => {
    const product = await getProductById(id);
    const { title, price, image, category, description } = product;
    txtTitle.value = title;
    txtPrice.value = price;
    txtImage.value = image;
    txtCategory.value = category;
    txtDesc.value = description;
    hdnId.value = id;
};
frmProduct.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formType = frmProduct.dataset.type;
    const title = txtTitle.value;
    const price = txtPrice.value;
    const image = txtImage.value;
    const category = txtCategory.value;
    const description = txtDesc.value;
    const id = hdnId.value;
    const product = {
        title,
        price,
        image,
        category,
        description,
    };
    if (formType === "update") {
        await updateProduct(id, product)
        alert("Product updated successfully");
    }
    else if(formType === "create") {
        await createProduct(product);
        alert("Product created successfully");
    }
    frmProduct.reset();
    frmProduct.dataset.type = "create";
    init();
});
tbody.addEventListener("click", async (e) => {
    const id = e.target.closest("tr").dataset.id;
    if (e.target.classList.contains("btn-del")) {
        const res = confirm("Are you sure to delete?");
        if (!res) return;
        await deleteProduct(id);
        init();
        alert("Product deleted successfully");
    } else if (e.target.classList.contains("btn-edit")) {
        await editProduct(id);
        frmProduct.dataset.type = "update";
        window.scrollTo(0, 0);
    }
});
init();
