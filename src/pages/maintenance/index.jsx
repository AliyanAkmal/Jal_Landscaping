import React from "react";
import MaintenanceHero from "../../components/maintenance/MaintenanceHero";
import MaintenanceProcess from "../../components/maintenance/MaintenanceProcess";
import MaintenanceBenefits from "../../components/maintenance/MaintenanceBenefits";
import MaintenancePackages from "../../components/maintenance/MaintenancePackages";

const Maintenance = () => {
    return (
        <div >
            <MaintenanceHero />
            <MaintenanceProcess />
            <MaintenanceBenefits />
            <MaintenancePackages />
        </div>
    );
};

export default Maintenance;

