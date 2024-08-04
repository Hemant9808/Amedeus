export interface Airline {
    /**
        * The three-character IATA code for the airline
        */
    name: string;
    /**
        * Duffel's unique identifier for the airline
        */
    id: string;
    iata_code: string | null;
    logo_lockup_url: string | null;
    logo_symbol_url: string | null;
    conditions_of_carriage_url: string | null;
    }
export interface Aircraft {
    /**
        * The name of the aircraft
        */
    name: string;
    /**
        * Duffel's unique identifier for the aircraft
        */
    id: string;
    /**
        * The three-character IATA code for the aircraft
        */
    iata_code: string;
    }
export interface OfferSliceSegment {
    /**
        * The aircraft that the operating carrier will use to operate this segment
        */
    aircraft: Aircraft;
    /**
        * The ISO 8601 datetime at which the segment is scheduled to arrive
        */
    arriving_at: string;
    /**
        * The terminal at the destination airport where the segment is scheduled to arrive
        */
    destination_terminal: string | null;
    /**
        * The ISO 8601 datetime at which the segment is scheduled to depart
        */
    departing_at: string;
    /**
        * The terminal at the origin airport from which the segment is scheduled to depart
        */
    origin_terminal: string | null;
    /**
        * The airport at which the segment is scheduled to arrive
        */
    destination: any;
    /**
        * The distance of the segment in kilometres
        */
    distance: string | null;
    /**
        * The duration of the segment, represented as a ISO 8601 duration
        */
    duration: string | null;
    /**
        * Duffel's unique identifier for the segment. It identifies the segment of an offer (i.e. the same segment across offers will have different `id`s
        */
    id: string;
    /**
        * The airline selling the tickets for this segment.
        * This may differ from the operating_carrier in the case of a "codeshare", where one airline sells flights operated by another airline.
        */
    marketing_carrier: Airline;
    /**
        * The flight number assigned by the marketing carrier
        */
    marketing_carrier_flight_number: string;
    /**
        * The airport from which the flight is scheduled to depart
        */
    origin: any;
    /**
        * The airline actually operating this segment.
        * This may differ from the marketing_carrier in the case of a "codeshare", where one airline sells flights operated by another airline.
        */
    operating_carrier: Airline;
    /**
        * The flight number assigned by the operating carrier
        */
    operating_carrier_flight_number: string;
    /**
        * Additional segment-specific information about the passengers included in the offer (e.g. their baggage allowance and the cabin class they will be travelling in)
        */
    passengers: any;
    /**
        * Additional segment-specific information about the stops, if any, included in the segment
        */
    stops?: any;
    }
export type searchResultType= {
    origin: any;
    destination: any
    departureTime: string;
    arrivalTime: string;
    segments: OfferSliceSegment[];
    prices: {
        total_amount: string;
        tax_amount: string;
        base_currency: string;
        tax_currency: string;
    };
}