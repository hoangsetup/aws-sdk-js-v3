// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateAgentKnowledgeBaseRequest, AssociateAgentKnowledgeBaseResponse } from "../models/models_0";
import {
  de_AssociateAgentKnowledgeBaseCommand,
  se_AssociateAgentKnowledgeBaseCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateAgentKnowledgeBaseCommand}.
 */
export interface AssociateAgentKnowledgeBaseCommandInput extends AssociateAgentKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAgentKnowledgeBaseCommand}.
 */
export interface AssociateAgentKnowledgeBaseCommandOutput
  extends AssociateAgentKnowledgeBaseResponse,
    __MetadataBearer {}

/**
 * Associate a Knowledge Base to an existing Amazon Bedrock Agent
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, AssociateAgentKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, AssociateAgentKnowledgeBaseCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // AssociateAgentKnowledgeBaseRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   description: "STRING_VALUE", // required
 *   knowledgeBaseState: "ENABLED" || "DISABLED",
 * };
 * const command = new AssociateAgentKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAgentKnowledgeBaseResponse
 * //   agentKnowledgeBase: { // AgentKnowledgeBase
 * //     agentId: "STRING_VALUE", // required
 * //     agentVersion: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     description: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     knowledgeBaseState: "ENABLED" || "DISABLED", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateAgentKnowledgeBaseCommandInput - {@link AssociateAgentKnowledgeBaseCommandInput}
 * @returns {@link AssociateAgentKnowledgeBaseCommandOutput}
 * @see {@link AssociateAgentKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link AssociateAgentKnowledgeBaseCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *  This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  This exception is thrown when a request is made beyond the service quota
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 * @public
 */
export class AssociateAgentKnowledgeBaseCommand extends $Command
  .classBuilder<
    AssociateAgentKnowledgeBaseCommandInput,
    AssociateAgentKnowledgeBaseCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "AssociateAgentKnowledgeBase", {})
  .n("BedrockAgentClient", "AssociateAgentKnowledgeBaseCommand")
  .f(void 0, void 0)
  .ser(se_AssociateAgentKnowledgeBaseCommand)
  .de(de_AssociateAgentKnowledgeBaseCommand)
  .build() {}
