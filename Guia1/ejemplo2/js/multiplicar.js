//Genera una tabla de multiplicar 

//Ingresando el numero y capturandolo usando el método promt()
var numero = prompt('Ingrese un número entero para obtener su tabla de multiplicar', '');

//Construyendo la tabla de multiplicar 
document.write("<table>\n\t");
document.write("<caption>Tabla del multiplicar del " + numero + "</caption>\n");
document.write("<thead>\n\t");
document.write("<tr>\n\t\t<th>Operación</th>\n\t\t<th>Producto</th>\n\t</tr>\n");
document.write("</thead>\n\t");
document.write("<tbody>\n\t");
document.write("<tr>\n\t\t<td>" + numero + " x 1 = </td>\n\t\t");
document.write("<td>" + (numero * 1) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td>" + numero + " x 2 = </td>\n\t\t");
document.write("<td>" + (numero * 2) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td>" + numero + " x 3 = </td>\n\t\t");
document.write("<td>" + (numero * 3) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td>" + numero + " x 4 = </td>\n\t\t");
document.write("<td>" + (numero * 4) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td>" + numero + " x 5 = </td>\n\t\t");
document.write("<td>" + (numero * 5) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td>" + numero + " x 6 = </td>\n\t\t");
document.write("<td>" + (numero * 6) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td>" + numero + " x 7 = </td>\n\t\t");
document.write("<td>" + (numero * 7) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td>" + numero + " x 8 = </td>\n\t\t");
document.write("<td>" + (numero * 8) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td>" + numero + " x 9 = </td>\n\t\t");
document.write("<td>" + (numero * 9) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td>" + numero + " x 10 = </td>\n\t\t");
document.write("<td>" + (numero * 10) + "</td>\n\t</tr>\n\t");
document.write("</tbody>\n");
document.write("</table>");