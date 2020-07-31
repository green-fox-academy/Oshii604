`use strict`;

// charAt
{
  const str = new String('This is string');
  console.log(`Character of the string #1 is: ${str.charAt(0)}`);
  console.log(`Character of the string #2 is: ${str.charAt(1)}`);
  console.log(`Last character of the string is: ${str.charAt(str.length - 1)}`);
}
// charCodeAt
{
  const str = new String('This is string, meg egy ű');
  console.log(`Character ASCII code of the string #1 is: ${str.charCodeAt(0)}`);
  console.log(`Character ASCII code of the string #2 is: ${str.charCodeAt(1)}`);
  console.log(`Last character's ASCII code is: ${str.charCodeAt(str.length - 1)}`);
}
