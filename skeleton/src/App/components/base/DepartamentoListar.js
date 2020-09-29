import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import callApi from '../../../helpers/conectorApi';
import Aux from '../../../hoc/_Aux';
import withReactContent from 'sweetalert2-react-content';
import { alert_exitoso, alert_warning } from '../../../helpers/Notificacion';
import { DepartamentoUpSert } from './DepartamentoUpSert';
import { limpiarEstiloTabla,asignarEstiloTabla } from '../../../helpers/estiloTabla';
const accesos = [1, 2, 3, 4];
export const DepartamentoListar = ({ personaId }) => {
    const [abrirModal, setAbrirModal] = useState(false);
    const [catPaises, setCatPais] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);
    const initData = {
        departamentoId: '',
        paisId: '',
        descripcion: '',
        estadoId: 1
    };

    const [dataInicial, setdataInicial] = useState(initData);
    const handleOpenModal = () => {
        setAbrirModal(true);
        setdataInicial(initData);
    }
    const GetPaises = async () => {
        let response = await callApi('pais?include=0?estadoId=1');
        setCatPais(response);
    }
    const GetDepartamentos = async () => {
        let response = await callApi('departamento?estadoId=1;2');
        limpiarEstiloTabla("#mytable");
        setDepartamentos(response);
        asignarEstiloTabla("#mytable");
    }
    const handleEditar = (id) => {
        const { departamentoId, paisId, descripcion, estadoId } = departamentos.find(item => item.departamentoId === id);
        setdataInicial({
            departamentoId,
            paisId,
            descripcion,
            estadoId
        });
        setAbrirModal(true);
    }
    const handleDelete = (id) => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: 'Alerta?',
            text: 'Esta seguro que desea eliminar el elemento',
            type: 'warning',
            showCloseButton: true,
            showCancelButton: true
        }).then(async (willDelete) => {
            if (willDelete.value) {
                let method = 'DELETE';
                let response = await callApi(`departamento/${id}`, {
                    method
                });
                if (response) {
                    alert_exitoso(response);
                    let listActual = departamentos.filter(item => item.departamentoId !== id);
                    setDepartamentos(listActual);
                }
            } else {
                alert_warning('No se eliminó ningún elemento');
            }
        });
    }
    useEffect(() => {
        GetDepartamentos();
        GetPaises();
    }, []);


    return (
        <Aux>
            <Row className='btn-page'>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Departamentos</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="align-items-center m-l-0">
                                <Col />
                                <Col className="text-right">
                                    {
                                        accesos.find(acceso => acceso === 1) &&
                                        <Button variant="success" className="btn-sm btn-round has-ripple" onClick={handleOpenModal}><i className="feather icon-plus" /> Agregar departamento</Button>
                                    }
                                </Col>
                            </Row>
                            {
                                accesos.find(acceso => acceso === 2) &&
                                <Table striped hover responsive bordered id="mytable">
                                    <thead>
                                        <tr>
                                            <th>Codigo</th>
                                            <th>Departamento</th>
                                            <th>Pais</th>
                                            <th>Estado</th>
                                            {
                                                accesos.find(acceso => acceso === 3 || acceso === 4) &&
                                                <th></th>
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            departamentos.map(({ departamentoId, descripcion, cat_pai: { descripcion: pais }, cat_estado: { descripcion: estado } }) => (
                                                <tr key={departamentoId}>
                                                    <td>{departamentoId}</td>
                                                    <td>{descripcion}</td>
                                                    <td>{pais}</td>
                                                    <td>{estado}</td>
                                                    {
                                                        accesos.find(acceso => acceso === 3 || acceso === 4) &&
                                                        <td style={{ textAlign: "center" }}>
                                                            {
                                                                accesos.find(acceso => acceso === 3) &&
                                                                <button className="btn-icon btn btn-info btn-sm" onClick={() => { handleEditar(departamentoId) }}><i className="feather icon-edit" /></button>
                                                            }
                                                            {
                                                                accesos.find(acceso => acceso === 4) &&
                                                                <button className="btn-icon btn btn-danger btn-sm" onClick={() => { handleDelete(departamentoId) }}><i className="feather icon-trash-2" /></button>
                                                            }
                                                        </td>
                                                    }
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            }
                            {
                                abrirModal === true &&
                                <DepartamentoUpSert abrirModal={abrirModal} setAbrirModal={setAbrirModal} catPaises={catPaises} GetDepartamentos={GetDepartamentos} dataInicial={dataInicial} />
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
}