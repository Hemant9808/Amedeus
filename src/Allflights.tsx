import React from 'react'
import { flightData } from './data';
import flights from './flightDetails';



interface AllFlightCardProps {
  data: any;
  
}

const AllFlightCard = ({ data }: AllFlightCardProps) => {
  const flights = Array.isArray(data) ? data : [];

  const calculateFlightDuration = (departingAt:any, arrivingAt:any) => {
    const departureDate:any = new Date(departingAt);
    const arrivalDate:any = new Date(arrivingAt);
  
    const durationInMs = arrivalDate - departureDate;
    const durationInMinutes = Math.floor(durationInMs / (1000 * 60));
  
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
  
    return `${hours}h ${minutes}m`;
  };
  return (
    <>

<div className="mx-auto p-4">
      {flightData.map((flight:any, index:number) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="border bg-white rounded-lg shadow-md p-4 flex flex-col w-[40rem]">
            {flight.segments.map((segment:any, segmentIndex:any) => (
              <div key={segmentIndex} className="flex flex-col gap-4">
                {segment.map((stop:any, stopIndex:any) => (
                  <>
                   <div className="text-sm text-gray-500">
                   {new Date(stop.departing_at).toLocaleDateString()} • Outbound
                 </div>
                  <div key={stopIndex} className="flex justify-between items-center border-b pb-4 mb-4">
                   
                      
                    <div className="flex flex-col">
                      
                      <div className="flex flex-col  justify-between items-center my-2">
                        <div className="font-bold text-xl">{stop.origin.city_name || stop.origin.iata_city_code}</div>
                        <div className="text-gray-500">{new Date(stop.departing_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                      </div>
                     
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="flex justify-center items-center">
                        {segment.length > 1 ? (
                          <div>
                            <div className="mx-2">Flight {stopIndex + 1}</div>
                          </div>
                        ) : (
                          <div className="mx-2">Direct</div>
                        )}
                      </div>
                      <div className="font-medium"> {calculateFlightDuration(stop.departing_at, stop.arrival_at) || " "}</div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-sm text-gray-500">
                        {stop.operating_carrier.name}
                      </div>
                      <div className="flex flex-col items-center my-2 gap-2">
                        <div className="font-bold text-xl">{stop.destination.city_name || stop.destination.iata_city_code}</div>
                        <div className="text-gray-500">{new Date(stop.arrival_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                      </div>
                    </div>
                    
                  </div>
                  </>
                ))}
              </div>
            ))}

          

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






      {/* <div className="  mx-auto p-4">
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
                     
                    </div>

                    <div className="font-medium">{stop.journeyDuration}</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-sm text-gray-500">
                    
                    </div>
                    <div className="flex flex-col items-center my-2 gap-2">
                      <div className="font-bold text-xl">{stop.to} </div>
                      <div className=" text-gray-500">{new Date(stop.departureDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} </div>
                    </div>
                  </div>
                </div>))}



              <hr className="my-4" />

             

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
      </div> */}
    </>
  );
};

export default AllFlightCard;
