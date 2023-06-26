// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPolicyTagsCommand,
  ListPolicyTagsCommandInput,
  ListPolicyTagsCommandOutput,
} from "../commands/ListPolicyTagsCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListPolicyTagsCommandInput,
  ...args: any
): Promise<ListPolicyTagsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPolicyTagsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPolicyTags(
  config: IAMPaginationConfiguration,
  input: ListPolicyTagsCommandInput,
  ...additionalArguments: any
): Paginator<ListPolicyTagsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPolicyTagsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
