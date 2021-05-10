// https://dorey.github.io/JavaScript-Equality-Table/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

Always use === (Strict equality) -------------------------------
Strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared.
If the values have different types, the values are considered unequal. If the values have the same type, are not numbers, and have 
the same value, they're considered equal. Finally, if both values are numbers, they're considered equal if they're both not NaN and are 
the same value, or if one is +0 and one is -0.

Loose equality using == (when comparing coercion happens)
The behavior for performing loose equality using == is as follows:
Loose equality compares two values for equality after converting both values to a common type. 
After conversions (one or both sides may undergo conversions), the final equality comparison is performed exactly as === performs it.
Loose equality is symmetric: A == B always has identical semantics to B == A for any values of A and B (except for the order of
applied conversions). undefined and null are loosely equal; that is, undefined == null is true, and null == undefined is true

false == ""  // true
false == []  //true
false == {}  //false
"" == 0     //true
"" == []    //true
"" == {}   //false  
0 == []    //true
0 == {}      //false
0 == null   //false

