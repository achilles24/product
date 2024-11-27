# product

```javascript
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
```
Examples : 

So lets say in product listing we have P1, P2, P3, P4, P5 and P6
user selects P1,P2,P3 for comparison in the same order in the dropdown.
first dropdown will show P1 as the (selected)first item in the list and then P4, P5, P6
second dropdown will show P2 as the (selected)first item in the list and then P4, P5, P6
third dropdown will show P3 as the (selected)first item in the list and then P4, P5, P6

if user change p1 to p4 in the first dropdown, then p4 should be the (selected)first item in the list & then p1, p5, p6
second dropdown will show P2 as the (selected)first item in the list and then p1, p5, p6
third dropdown will show P3 as the (selected)first item in the list and then p1, p5, p6

Basic Logic is the current dropdown should not consist of other selected products from the other 2 dropdowns 
table should update based on dropdown selection.
---------

|specs| p1 | p2 | p3 |
|-----|----|----|----|
|model|a1  |s1  |12  |
|brand|noki|sams|appl|

