let str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos ' +
    'electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le ' +
    'envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez ' +
    'en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las ' +
    'direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de ' +
    'correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio ' +
    'detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el ' +
    ' cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información' +
    ' varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o ' +
    'gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado ' +
    'su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo ' +
    'electrónico que configura para el dominio lo tienen como parte del dominio ' +
    '(nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). ' +
    'El nombre de usuario es la parte de una dirección de correo electrónico quepuede seleccionar ' +
    'libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre ' +
    'o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de ' +
    'correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ' +
    'ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su ' +
    'dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican ' +
    'porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio ' +
    'dominio. En resumen, nombre-de-usuario@ionos.es es un email';

function extraerMail(str) {

    // El método match() busca en una cadena una coincidencia con una expresión regular y devuelve las coincidencias como un objeto Array.
    // Expresión regular donde tenemos en cuenta las letras MAY-min, números (0 al 9) y símbolos(.-_@).
    let emailsEncontrados = str.match(/([a-zA-ZÀ-ÿ0-9._-]+@[a-zA-ZÀ-ÿ0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

    // Ponemos todas las letras en minúsculas para evitar confusiones cuando encuentre un mismo correo escrito en mayúsculas o minúsculas
    emailsEncontrados = emailsEncontrados.map(function (x) {
        return x.toLowerCase();
    })

    // El método filter() nos permitirá filtrar solo los elementos que deseamos y devolvernos en un nuevo array.
    // SINTAXIS: array.filter(function(currentValue, index, arr), thisValue).
    // Quitará los correos duplicados y devolverá el Array con los correos encontrados
    let emailsUnicos = emailsEncontrados.filter((a, b) => emailsEncontrados.indexOf(a) === b)


    console.log(" ");
    console.log("Nivel 2 - Exercici 5");
    console.log(emailsUnicos);
}