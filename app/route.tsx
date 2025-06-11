import { DragosPage } from 'pages/dragos';
import { HomePage } from 'pages/homepage';
import { SettingsPage } from 'pages/settings';
import { RenteeDragosPage } from 'pages/renteeDragos';

export const HomeRoute = () => <HomePage />;
export const SettingsRoute = () => <SettingsPage />;
export const DragoRoute = () => <DragosPage />;
export const RenteeDragoRoute = () => <RenteeDragosPage />;
