import React, { useState } from 'react';
import HeaderMantenimiento from 'components/Headers/HeaderMantenimiento';
import ProductosMantenimiento from './ProductosMantenimiento';
import Clientes from './Clientes';
import VehiculosMantenimiento from './VehiculosMantenimiento/VehiculosMantenimiento';
import CategoriasMantenimiento from './CategoriasMantenimiento';
import ServiciosMantenimiento from './ServiciosMantenimiento';
import Empleados from './Empleados';
import Inventario from './InventariosLote';

import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";
import {
  faUsers,
  faCar,
  faTags,
  faBoxOpen,
  faUserTie,
  faWarehouse,
  faTools
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import Inventario from 'TiendaConveniencia/InventarioTienda/Inventario';

const Mantenimiento = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const secciones = [
    { id: 'clientes', label: 'Clientes', icon: faUsers, color: 'primary' },
    { id: 'categorias', label: 'Categorías', icon: faTags, color: 'primary' },
    { id: 'productos', label: 'Productos', icon: faBoxOpen, color: 'primary' },
    { id: 'vehiculos', label: 'Vehículos', icon: faCar, color: 'primary' },
    { id: 'servicios', label: 'Servicios', icon: faTools, color: 'primary' },
    { id: 'Empleados', label: 'Empleados', icon: faUserTie, color: 'primary' },
    { id: 'inventario', label: 'Inventario', icon: faWarehouse, color: 'primary'},
  ];

  return (
    <>
      <HeaderMantenimiento />
      <br />
      <Container className="mt--0" fluid>
      {/* Card de botones en la parte superior */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow">
            <CardBody>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {secciones.map((s) => (
                  <Button
                    key={s.id}
                    color={s.color}
                    className="btn-icon mb-2"
                    onClick={() => setSelectedSection(s.id)}
                  >
                    <FontAwesomeIcon icon={s.icon} className="mr-2" />
                    {s.label}
                  </Button>
                ))}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Card de gestión debajo */}
      <Row>
        <Col>
          <Card className="shadow">
            <CardHeader>
              <h3 className="mb-0">
                {selectedSection
                  ? `Gestión de ${secciones.find(s => s.id === selectedSection)?.label}`
                  : 'Formulario'}
              </h3>
            </CardHeader>
            <CardBody>
              {selectedSection === 'clientes' && <Clientes />}
              {selectedSection === 'categorias' && <CategoriasMantenimiento/>}
              {selectedSection === 'productos' && <ProductosMantenimiento />}
              {selectedSection === 'vehiculos' && <VehiculosMantenimiento />}
              {selectedSection === 'servicios' && <ServiciosMantenimiento />}
              {selectedSection === 'Empleados' && <Empleados />}
              {selectedSection === 'inventario' && <Inventario />}
              {!selectedSection && (
                <div>
                  <p>Selecciona una opción para comenzar.</p>
                </div>
              )}
              
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Mantenimiento;
