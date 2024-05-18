import HeaderTitle from "../HeaderTitle";
import CustomTable from "../custom-table";
const PlacementSection = () => (
  <section className="bg-secondary-light px-8 sm:px-0">
    <div className="sm:w-[80%] lg:w-[60rem] m-auto flex flex-col justify-center items-center gap-16 py-20">
      <HeaderTitle title="Placements" />
      <p className="text-center">
        At the Academy of Technology (AOT), our teaching-learning process,
        examination system, and training are tailored to foster hard work and
        motivation among our students. Our commitment to placement assistance
        extends beyond graduation, ensuring lasting support for our students. We
        prioritize providing ample campus interview opportunities in both IT and
        core engineering sectors, maintaining relationships with esteemed
        companies like Capgemini, Cyient, TCS, Tech Mahindra, and Wipro
        Technologies. Over the past three years, our students have consistently
        excelled in securing placements, with a remarkable 103.49% placement
        rate in 2021 and an impressive 191.49% rate in 2022. In 2023, our
        students have already received 147.36% placement offers, demonstrating
        their continued success.
      </p>
      <CustomTable
        label="Placement Rate(Past 3 years)"
        columns={[
          "Year",
          <>
            Till April
            <br />
            (Of the corresponding year)
          </>,
          "Final Placements",
        ]}
        rows={[
          [2024, <div className="text-center">75.89%</div>, "Continuing..."],
          [2023, <div className="text-center">147.36%</div>, "165%"],
          [2022, <div className="text-center">175.15%</div>, "191.49%"],
        ]}
      />
    </div>
  </section>
);

export default PlacementSection;
