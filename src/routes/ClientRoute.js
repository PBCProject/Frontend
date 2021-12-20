import { Route, Routes } from 'react-router';
import { Dash } from '../components/dash/Dash';
import { GetCredit } from '../components/Client/GetCredit';
import { Historial } from '../components/dash/content/Historial';
import { Prorroga } from '../components/dash/content/Prorroga';
import { Certificados } from '../components/dash/content/Certificados';
import { Solicitar } from '../components/dash/content/Solicitar';
import { Pagar } from '../components/dash/content/Pagar';
import { Mensajes } from '../components/dash/content/Mensajes';


export const ClientRoute = () => {
    return (
        <Routes>
            <Route path="credits" element={<Dash Element={GetCredit} title="Créditos" />} />
            <Route path="historial" element={<Dash Element={Historial} title="Historial" />} />
            <Route path="prorroga" element={<Dash Element={Prorroga} title="Prorroga" />} />
            <Route path="certificados" element={<Dash Element={Certificados} title="Certificados" />} />
            <Route path="pagar" element={<Dash Element={Pagar} title="Pagar" />} />
        </Routes>
    );
};
