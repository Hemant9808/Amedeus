

interface AllFlightCardProps {
  data: any;
}

const AllFlightCard = ({ data }: AllFlightCardProps) => {
  const flights = Array.isArray(data) ? data : [];
  return (
    <>
      <div className="  mx-auto p-4">
        {flights.map((flight, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="border bg-white rounded-lg shadow-md p-4  flex flex-col w-[40rem]">
                 
              {//@ts-ignore
              flight.stopsDetails.map((stop, stopIndex) => (
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-500">
                      {new Date(stop.departureDateTime).toLocaleDateString()} • Outbound
                    </div>
                    <div className="flex justify-between items-center my-2">
                      <div className="font-bold text-xl">{stop.from}</div>

                      {/* <div></div>
      IndiGo */}
                    </div>
                    <div className="text-gray-500">{new Date(stop.arrivalDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex  justify-center items-center">
                      {flight.stopsDetails.length > 1 ? (
                        <div>
                          <div className="mx-2">Flight {stopIndex + 1}</div>
                        </div>
                      ) : (
                        <div className="mx-2">Direct</div>


                      )}
                      {/* <img
                        src="indigo-logo.png"
                        alt={airlineCodes.get(stop.airlinecode)?.name || stop.airlinecode}
                        className="h-5 mx-1"
                      /> */}
                    </div>

                    <div className="font-medium">{stop.journeyDuration}</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-sm text-gray-500">
                      {/* 8 nights in New Delhi */}
                    </div>
                    <div className="flex flex-col items-center my-2 gap-2">
                      <div className="font-bold text-xl">{stop.to} </div>
                      <div className=" text-gray-500">{new Date(stop.departureDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} </div>
                    </div>
                  </div>
                </div>))}



              <hr className="my-4" />

              {/* <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">
                      Sat 13 Jul • Inbound
                    </div>
                    <div className="flex items-center my-2">
                      <div className="font-bold text-xl">DEL</div>
                    </div>
                    <div className="text-gray-500">1h 30m</div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex  justify-center items-center">
                      <div className="mx-2">Direct</div>
                      <img
                        src="indigo-logo.png"
                        alt="IndiGo"
                        className="h-5 mx-1"
                      />
                    </div>

                    <div className="font-medium">21:30</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center flex-col gap-2 my-2">
                      <div className="font-bold text-xl">PAT</div>
                      <div className="text-gray-500">20:25</div>
                    </div>
                  </div>
                </div> */}

              <div className="mt-4">
                <div className="text-2xl font-bold text-center">131 €</div>
                <div className="flex justify-between items-center mt-2">
                  <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md">
                    Lock price for 13 €
                  </button>
                  <button className="bg-green-500 text-white py-2 px-4 rounded-md">
                    Select
                  </button>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </>
  );
};

export default AllFlightCard;