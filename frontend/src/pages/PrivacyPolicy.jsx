import { Container } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
export default function PrivacyPolicy() {
  console.log("PrivacyPolicy component rendered");
  return (
    <>
      <Container>
        <h1 className="text-center mt-3">
          <strong>Politica de Privacidad</strong>
        </h1>
        <ListGroup variant="flush">
          <ListGroup.Item className="mb-5">
            El sitio <strong>www.lolapuñales.com</strong> (en adelante,
            lolapuñales.com) asume el compromiso de garantizar la privacidad del
            cliente, colaborador o visitante de lolapuñales.com (en adelante, el
            “Usuario”) en todo momento, en todas las secciones de
            lolapuñales.com, y en todas las interacciones con aquél. El
            Administrador asume también el compromiso de no recabar información
            innecesaria sobre el Usuario.
          </ListGroup.Item>
          <ListGroup.Item className="mb-5">
            <strong>1. Protección de Datos</strong>
            <br />
            El Responsable del tratamiento ha adoptado todas las medidas de
            protección de datos exigidas por el Reglamento General de Protección
            de Datos 679/2016 (RGPD) y la normativa aplicable, habiendo adaptado
            su política de privacidad a las nuevas exigencias legales.
          </ListGroup.Item>
          <ListGroup.Item className="mb-5">
            <strong>
              1.1 ¿Quién es el responsable del tratamiento de sus datos?
            </strong>
            <br />
            ZOO QUEEN SL, con domicilio social en la calle Paseo Imperial, nº
            89, 28036 Madrid y cuyo teléfono de contacto es 915 700 766.
          </ListGroup.Item>
          <ListGroup.Item className="mb-5">
            <strong>1.2 ¿Para qué utilizamos sus datos?</strong>
            <br />
            En Lola Puñales tratamos sus datos personales únicamente para el fin
            para el cual han sido recabados. En concreto, serán utilizados para
            garantizar la reserva efectuada por el interesado así como efectuar
            el cobro en caso de incumplimiento de la obligación contractual.
          </ListGroup.Item>
          <ListGroup.Item className="mb-5">
            <strong>
              1.3 ¿Cuál es la base legal para el tratamiento de los datos?
            </strong>
            <br />
            La utilización de los datos es necesaria para la correcta gestión de
            la reserva efectuada y proteger al restaurante de la pérdida
            ocasionada en caso de incumplimiento por el cliente de la obligación
            contractual contraída.
          </ListGroup.Item>
          <ListGroup.Item className="mb-5">
            <strong>1.4 ¿A quién se comunicarán o cederán sus datos?</strong>
            <br />
            No se cederán sus datos personales a terceros, ni serán vendidos o
            transmitidos de modo alguno la información personal que usted ceda,
            salvo que se deba cumplir con una obligación legal.
          </ListGroup.Item>
          <ListGroup.Item className="mb-5">
            <strong>1.5 ¿Por cuánto tiempo conservaremos sus datos?</strong>
            <br />
            Los datos personales proporcionados se conservarán mientras sean
            necesarios para el fin para el cual fueran recabados, procediendo
            posteriormente a su destrucción.
          </ListGroup.Item>
          <ListGroup.Item className="mb-5">
            <strong>
              1.6 ¿Cuáles son sus derechos y cómo puede ejercerlos?
            </strong>
            <br />
            Como titular de sus datos, usted tiene el control sobre los mismos y
            podrá ejercer sus derechos enviando un email a{" "}
            <strong>info@lolapuñales.com</strong> (att. DERECHOS), indicando su
            nombre y adjuntando una fotocopia de su documento de identidad y
            señalando el derecho que quiere ejercer.
            <br />
            <br />
            <strong>
              Derecho de acceso, rectificación y/o supresión:
            </strong>{" "}
            Acceder a sus datos, rectificarlos o eliminarlos.
            <br />
            <strong>Derecho de limitación del tratamiento:</strong> Conservar
            solo para defensa legal.
            <br />
            <strong>Derecho de portabilidad:</strong> Solicitar sus datos en un
            formato reutilizable.
          </ListGroup.Item>
          <ListGroup.Item className="mb-5">
            <strong>2. Seguridad de la información</strong>
            <br />
            El Administrador ha empleado todas las medidas técnicas posibles
            para evitar la pérdida, mal uso, alteración, acceso no autorizado y
            sustracción de datos. Sin embargo, el Usuario debe ser consciente de
            que las medidas de seguridad en Internet no son inexpugnables.
          </ListGroup.Item>
          <ListGroup.Item className="mb-5">
            <strong>3. Protección frente a accesos no autorizados</strong>
            <br />
            La información del Usuario almacenada en los servidores de
            lolapuñales.com se conserva en el entorno más seguro posible con
            protección mediante Firewall y sistemas de control de acceso.
          </ListGroup.Item>
          <ListGroup.Item className="mb-5">
            <strong>4. Aplicabilidad a otros sitios web</strong>
            <br />
            El sitio web de lolapuñales.com puede contener enlaces a otros
            sitios sobre los cuales no tiene control ni responsabilidad sobre
            sus políticas de protección de datos.
          </ListGroup.Item>
          <ListGroup.Item className="mb-5">
            <strong>
              5. Utilización de la dirección de correo electrónico del Usuario
            </strong>
            <br />
            lolapuñales.com puede enviar correos electrónicos al Usuario bajo
            condiciones aceptadas por él. Puede cancelar la suscripción en
            cualquier momento.
          </ListGroup.Item>
          <ListGroup.Item className="mb-5">
            <strong>
              6. Cambios en la Política de Seguridad y Protección de Datos
            </strong>
            <br />
            El Administrador puede modificar la política de seguridad según la
            legislación vigente. Los cambios serán comunicados a los interesados
            por correo electrónico.
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
}
