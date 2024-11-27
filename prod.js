const allItems = [
    {brand: "nokia", model: 'a1', price: "12$", camera: "no"},
    {brand: "samsung", model: 's1', price: "15$", camera: "no"},
    {brand: "apple", model: '12', price: "12$", camera: "no"},
    {brand: "nokia", model: 'a5', price: "23$", camera: "no"},
    {brand: "samsung", model: 'e1', price: "15$", camera: "no"},
    {brand: "apple", model: '13', price: "12$", camera: "yes"}
];

const selectedItem = [
    {brand: "nokia", model: 'a1', price: "12$", camera: "no"},
    {brand: "samsung", model: 's1', price: "15$", camera: "no"},
    {brand: "apple", model: '12', price: "12$", camera: "no"}
];

function populateDropdowns() {
    const dropdowns = [document.getElementById('product1'), document.getElementById('product2'), document.getElementById('product3')];
    const selectedModels = dropdowns.map(dropdown => dropdown.value);

    dropdowns.forEach((dropdown, index) => {
        dropdown.innerHTML = '';
        allItems.forEach(item => {
            const option = document.createElement('option');
            option.value = item.model;
            option.text = item.model;
            if (!selectedModels.includes(item.model) || item.model === selectedModels[index]) {
                dropdown.appendChild(option);
            }
        });
        dropdown.value = selectedModels[index] || selectedItem[index].model;
    });
}

function updateProduct(productIndex) {
    const selectedModel = document.getElementById(`product${productIndex}`).value;
    const product = allItems.find(item => item.model === selectedModel);
    if (!product) return; // If product is not found, exit the function
    const specs = ['brand', 'model', 'price', 'camera'];
    specs.forEach(spec => {
        document.getElementById(`${spec}${productIndex}`).innerText = product[spec] || 'N/A';
    });
}

function populateSpecifications() {
    const specs = ['brand', 'model', 'price', 'camera'];
    const specContainer = document.getElementById('specifications');
    specs.forEach(spec => {
        const row = document.createElement('div');
        row.className = 'row';
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.innerText = spec.charAt(0).toUpperCase() + spec.slice(1);
        row.appendChild(cell);
        for (let i = 1; i <= 3; i++) {
            const valueCell = document.createElement('div');
            valueCell.className = 'cell';
            valueCell.id = `${spec}${i}`;
            row.appendChild(valueCell);
        }
        specContainer.appendChild(row);
    });
}

function handleDropdownChange() {
    updateProduct(1);
    updateProduct(2);
    updateProduct(3);
    populateDropdowns();
}

document.addEventListener('DOMContentLoaded', () => {
    populateSpecifications();
    populateDropdowns();
    updateProduct(1);
    updateProduct(2);
    updateProduct(3);
});

document.querySelectorAll('select').forEach((dropdown, index) => {
    dropdown.addEventListener('change', () => {
        handleDropdownChange();
    });
});
