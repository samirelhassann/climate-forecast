/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */

export async function api<responseModel>({
  path,
  queryParams = {},
  nextParams = {},
}: {
  path: string;
  queryParams?: Record<string, string>;
  nextParams?: RequestInit;
}): Promise<responseModel> {
  const baseUrl = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_HOST;
  const url = new URL(path, baseUrl);

  queryParams.appid = process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY!;

  Object.keys(queryParams).forEach((key) =>
    url.searchParams.append(key, queryParams[key])
  );

  const requestParams: RequestInit = {
    cache: "no-store",
    ...nextParams,
  };

  const response = await fetch(url, requestParams);

  return (await response.json()) as responseModel;
}
