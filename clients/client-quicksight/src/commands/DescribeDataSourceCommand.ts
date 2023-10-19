// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DescribeDataSourceRequest, DescribeDataSourceResponse } from "../models/models_3";
import { de_DescribeDataSourceCommand, se_DescribeDataSourceCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDataSourceCommand}.
 */
export interface DescribeDataSourceCommandInput extends DescribeDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDataSourceCommand}.
 */
export interface DescribeDataSourceCommandOutput extends DescribeDataSourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDataSourceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDataSourceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeDataSourceRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSourceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataSourceResponse
 * //   DataSource: { // DataSource
 * //     Arn: "STRING_VALUE",
 * //     DataSourceId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Type: "ADOBE_ANALYTICS" || "AMAZON_ELASTICSEARCH" || "ATHENA" || "AURORA" || "AURORA_POSTGRESQL" || "AWS_IOT_ANALYTICS" || "GITHUB" || "JIRA" || "MARIADB" || "MYSQL" || "ORACLE" || "POSTGRESQL" || "PRESTO" || "REDSHIFT" || "S3" || "SALESFORCE" || "SERVICENOW" || "SNOWFLAKE" || "SPARK" || "SQLSERVER" || "TERADATA" || "TWITTER" || "TIMESTREAM" || "AMAZON_OPENSEARCH" || "EXASOL" || "DATABRICKS",
 * //     Status: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     DataSourceParameters: { // DataSourceParameters Union: only one key present
 * //       AmazonElasticsearchParameters: { // AmazonElasticsearchParameters
 * //         Domain: "STRING_VALUE", // required
 * //       },
 * //       AthenaParameters: { // AthenaParameters
 * //         WorkGroup: "STRING_VALUE",
 * //         RoleArn: "STRING_VALUE",
 * //       },
 * //       AuroraParameters: { // AuroraParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       AuroraPostgreSqlParameters: { // AuroraPostgreSqlParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       AwsIotAnalyticsParameters: { // AwsIotAnalyticsParameters
 * //         DataSetName: "STRING_VALUE", // required
 * //       },
 * //       JiraParameters: { // JiraParameters
 * //         SiteBaseUrl: "STRING_VALUE", // required
 * //       },
 * //       MariaDbParameters: { // MariaDbParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       MySqlParameters: { // MySqlParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       OracleParameters: { // OracleParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       PostgreSqlParameters: { // PostgreSqlParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       PrestoParameters: { // PrestoParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Catalog: "STRING_VALUE", // required
 * //       },
 * //       RdsParameters: { // RdsParameters
 * //         InstanceId: "STRING_VALUE", // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       RedshiftParameters: { // RedshiftParameters
 * //         Host: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         Database: "STRING_VALUE", // required
 * //         ClusterId: "STRING_VALUE",
 * //         IAMParameters: { // RedshiftIAMParameters
 * //           RoleArn: "STRING_VALUE", // required
 * //           DatabaseUser: "STRING_VALUE", // required
 * //           DatabaseGroups: [ // DatabaseGroupList
 * //             "STRING_VALUE",
 * //           ],
 * //           AutoCreateDatabaseUser: true || false,
 * //         },
 * //       },
 * //       S3Parameters: { // S3Parameters
 * //         ManifestFileLocation: { // ManifestFileLocation
 * //           Bucket: "STRING_VALUE", // required
 * //           Key: "STRING_VALUE", // required
 * //         },
 * //         RoleArn: "STRING_VALUE",
 * //       },
 * //       ServiceNowParameters: { // ServiceNowParameters
 * //         SiteBaseUrl: "STRING_VALUE", // required
 * //       },
 * //       SnowflakeParameters: { // SnowflakeParameters
 * //         Host: "STRING_VALUE", // required
 * //         Database: "STRING_VALUE", // required
 * //         Warehouse: "STRING_VALUE", // required
 * //       },
 * //       SparkParameters: { // SparkParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //       },
 * //       SqlServerParameters: { // SqlServerParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       TeradataParameters: { // TeradataParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       TwitterParameters: { // TwitterParameters
 * //         Query: "STRING_VALUE", // required
 * //         MaxRows: Number("int"), // required
 * //       },
 * //       AmazonOpenSearchParameters: { // AmazonOpenSearchParameters
 * //         Domain: "STRING_VALUE", // required
 * //       },
 * //       ExasolParameters: { // ExasolParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //       },
 * //       DatabricksParameters: { // DatabricksParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         SqlEndpointPath: "STRING_VALUE", // required
 * //       },
 * //       StarburstParameters: { // StarburstParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Catalog: "STRING_VALUE", // required
 * //         ProductType: "GALAXY" || "ENTERPRISE",
 * //       },
 * //       TrinoParameters: { // TrinoParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Catalog: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     AlternateDataSourceParameters: [ // DataSourceParametersList
 * //       {//  Union: only one key present
 * //         AmazonElasticsearchParameters: {
 * //           Domain: "STRING_VALUE", // required
 * //         },
 * //         AthenaParameters: {
 * //           WorkGroup: "STRING_VALUE",
 * //           RoleArn: "STRING_VALUE",
 * //         },
 * //         AuroraParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         AuroraPostgreSqlParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         AwsIotAnalyticsParameters: {
 * //           DataSetName: "STRING_VALUE", // required
 * //         },
 * //         JiraParameters: {
 * //           SiteBaseUrl: "STRING_VALUE", // required
 * //         },
 * //         MariaDbParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         MySqlParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         OracleParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         PostgreSqlParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         PrestoParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Catalog: "STRING_VALUE", // required
 * //         },
 * //         RdsParameters: {
 * //           InstanceId: "STRING_VALUE", // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         RedshiftParameters: {
 * //           Host: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           Database: "STRING_VALUE", // required
 * //           ClusterId: "STRING_VALUE",
 * //           IAMParameters: {
 * //             RoleArn: "STRING_VALUE", // required
 * //             DatabaseUser: "STRING_VALUE", // required
 * //             DatabaseGroups: [
 * //               "STRING_VALUE",
 * //             ],
 * //             AutoCreateDatabaseUser: true || false,
 * //           },
 * //         },
 * //         S3Parameters: {
 * //           ManifestFileLocation: {
 * //             Bucket: "STRING_VALUE", // required
 * //             Key: "STRING_VALUE", // required
 * //           },
 * //           RoleArn: "STRING_VALUE",
 * //         },
 * //         ServiceNowParameters: {
 * //           SiteBaseUrl: "STRING_VALUE", // required
 * //         },
 * //         SnowflakeParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Database: "STRING_VALUE", // required
 * //           Warehouse: "STRING_VALUE", // required
 * //         },
 * //         SparkParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //         },
 * //         SqlServerParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         TeradataParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         TwitterParameters: {
 * //           Query: "STRING_VALUE", // required
 * //           MaxRows: Number("int"), // required
 * //         },
 * //         AmazonOpenSearchParameters: {
 * //           Domain: "STRING_VALUE", // required
 * //         },
 * //         ExasolParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //         },
 * //         DatabricksParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           SqlEndpointPath: "STRING_VALUE", // required
 * //         },
 * //         StarburstParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Catalog: "STRING_VALUE", // required
 * //           ProductType: "GALAXY" || "ENTERPRISE",
 * //         },
 * //         TrinoParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Catalog: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     ],
 * //     VpcConnectionProperties: { // VpcConnectionProperties
 * //       VpcConnectionArn: "STRING_VALUE", // required
 * //     },
 * //     SslProperties: { // SslProperties
 * //       DisableSsl: true || false,
 * //     },
 * //     ErrorInfo: { // DataSourceErrorInfo
 * //       Type: "ACCESS_DENIED" || "COPY_SOURCE_NOT_FOUND" || "TIMEOUT" || "ENGINE_VERSION_NOT_SUPPORTED" || "UNKNOWN_HOST" || "GENERIC_SQL_FAILURE" || "CONFLICT" || "UNKNOWN",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     SecretArn: "STRING_VALUE",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeDataSourceCommandInput - {@link DescribeDataSourceCommandInput}
 * @returns {@link DescribeDataSourceCommandOutput}
 * @see {@link DescribeDataSourceCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSourceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class DescribeDataSourceCommand extends $Command<
  DescribeDataSourceCommandInput,
  DescribeDataSourceCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeDataSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDataSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeDataSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "QuickSight_20180401",
        operation: "DescribeDataSource",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeDataSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDataSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDataSourceCommandOutput> {
    return de_DescribeDataSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
