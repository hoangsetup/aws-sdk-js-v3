// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  QueryForecastCommand,
  QueryForecastCommandInput,
  QueryForecastCommandOutput,
} from "./commands/QueryForecastCommand";
import {
  QueryWhatIfForecastCommand,
  QueryWhatIfForecastCommandInput,
  QueryWhatIfForecastCommandOutput,
} from "./commands/QueryWhatIfForecastCommand";
import { ForecastqueryClient } from "./ForecastqueryClient";

/**
 * <p>Provides APIs for creating and managing Amazon Forecast resources.</p>
 */
export class Forecastquery extends ForecastqueryClient {
  /**
   * <p>Retrieves a forecast for a single item, filtered by the supplied criteria.</p>
   *          <p>The criteria is a key-value pair. The key is either <code>item_id</code> (or the
   *       equivalent non-timestamp, non-target field) from the <code>TARGET_TIME_SERIES</code> dataset,
   *       or one of the forecast dimensions specified as part of the <code>FeaturizationConfig</code>
   *       object.</p>
   *          <p>By default, <code>QueryForecast</code> returns the complete date range for the filtered
   *       forecast. You can request a specific date range.</p>
   *          <p>To get the full forecast, use the <a href="https://docs.aws.amazon.com/en_us/forecast/latest/dg/API_CreateForecastExportJob.html">CreateForecastExportJob</a> operation.</p>
   *          <note>
   *             <p>The forecasts generated by Amazon Forecast are in the same timezone as the dataset that was
   *         used to create the predictor.</p>
   *          </note>
   */
  public queryForecast(
    args: QueryForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryForecastCommandOutput>;
  public queryForecast(
    args: QueryForecastCommandInput,
    cb: (err: any, data?: QueryForecastCommandOutput) => void
  ): void;
  public queryForecast(
    args: QueryForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryForecastCommandOutput) => void
  ): void;
  public queryForecast(
    args: QueryForecastCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: QueryForecastCommandOutput) => void),
    cb?: (err: any, data?: QueryForecastCommandOutput) => void
  ): Promise<QueryForecastCommandOutput> | void {
    const command = new QueryForecastCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a what-if forecast.</p>
   */
  public queryWhatIfForecast(
    args: QueryWhatIfForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryWhatIfForecastCommandOutput>;
  public queryWhatIfForecast(
    args: QueryWhatIfForecastCommandInput,
    cb: (err: any, data?: QueryWhatIfForecastCommandOutput) => void
  ): void;
  public queryWhatIfForecast(
    args: QueryWhatIfForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryWhatIfForecastCommandOutput) => void
  ): void;
  public queryWhatIfForecast(
    args: QueryWhatIfForecastCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: QueryWhatIfForecastCommandOutput) => void),
    cb?: (err: any, data?: QueryWhatIfForecastCommandOutput) => void
  ): Promise<QueryWhatIfForecastCommandOutput> | void {
    const command = new QueryWhatIfForecastCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
