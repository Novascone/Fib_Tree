// Re-set the document title
document.title = 'The Golden Ratio';

// Create a red div in the body of the document


// Make a paragraph to hold some instructions
// var para = document.createElement('p');
// para.textContent = "Write code necessary to";
// div.appendChild(para);

// var ol = document.createElement('ol');
// div.appendChild(ol)

// var li = document.createElement('li');
// li.textContent = "create a <form>";
// ol.appendChild(li);

// li = document.createElement('li');
// li.textContent = "an <input> of type 'range' with the 'onchange' attribute which calls a JavaScript function";
// ol.appendChild(li);

// li = document.createElement('li');
// li.textContent = "as well as any other functions needed to compute the Fibonacci numbers recursively";
// ol.appendChild(li);


// li = document.createElement('li');
// li.textContent = "and create a <div> for each recursive function call";
// ol.appendChild(li);

var Fibonacci = function(number)
{

    if( number == 0)
    {
       return 0;
    }

    else if ( number == 1)
    {
       return 1;
    }

    else
    {
       return Fibonacci(number - 1) + Fibonacci(number - 2);
    }

}



var div = document.createElement('div');
div.setAttribute('class', 'red fib-container');
document.body.appendChild(div);



var form = document.createElement('form');
div.appendChild(form)

var label = document.createElement('label');
label.setAttribute ('for', 'slider');
label.textContent = "Tree(0)";
form.appendChild(label);

var tree = document.createElement('div');
tree.setAttribute('class', 'fib-list');
tree.textContent = "Fibonacci(0) = 0";
div.appendChild(tree);


var slider = document.createElement('input');
slider.setAttribute('type', 'range');
slider.setAttribute('min', '0');
slider.setAttribute('max', '11');
slider.setAttribute('value', '0');
slider.setAttribute('oninput', 'treeSlider(this)');
form.appendChild(slider);




var treeSlider = function(me) 
{
    var form = me.parentNode;

    var value = parseInt(me.value);

    label.textContent = `Tree(${value})`;

    if (tree) 
    {
        tree.remove();
    }
    tree = document.createElement('div');
    //tree.id = 'tree-of-divs';
    tree.setAttribute('class', 'fib-container');

    var treeObj = recursiveBinTree(value);
    tree.appendChild(treeObj);

    form.parentNode.appendChild(tree);
}

var recursiveBinTree = function(depth) 
{

    var value = Fibonacci(depth);
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'fib-item');
    var newP = document.createElement('p');
    newP.textContent = `Fibonacci(${depth}) = ${value}`;

    newDiv.appendChild(newP);

    if (depth === 0)
     {
        return newDiv;
    }
    else if (depth === 1)
    {
        return newDiv;
    }

    else 
    {
        var left = recursiveBinTree(depth - 1);
        var cls = left.getAttribute('class');
        left.setAttribute('class', 'fib-left ${cls}');
        newDiv.appendChild(left);

        var right = recursiveBinTree(depth - 2);
        cls = right.getAttribute('class');
        right.setAttribute('class', 'fib-right ${cls}');
        newDiv.appendChild(right);

        return newDiv;
    }
}







