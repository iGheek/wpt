// META: script=/common/utils.js
// META: script=resources/support.sub.js
// META: timeout=long
//
// Spec: https://wicg.github.io/private-network-access/#integration-fetch
//
// These tests verify that non-secure contexts cannot navigate iframes to
// less-public address spaces, and can navigate them otherwise.
//
// This file covers only those tests that must execute in a non secure context.
// Other tests are defined in: iframe.https.window.js

setup(() => {
  // Making sure we are in a non secure context, as expected.
  assert_false(window.isSecureContext);
});

promise_test(t => iframeTest(t, {
  source: { server: Server.HTTP_LOCAL },
  target: { server: Server.HTTP_LOCAL },
  expected: IframeTestResult.SUCCESS,
}), "local to local: no preflight required.");

promise_test(t => iframeTest(t, {
  source: { server: Server.HTTP_LOCAL },
  target: { server: Server.HTTP_PRIVATE },
  expected: IframeTestResult.SUCCESS,
}), "local to private: no preflight required.");

promise_test(t => iframeTest(t, {
  source: { server: Server.HTTP_LOCAL },
  target: { server: Server.HTTP_PUBLIC },
  expected: IframeTestResult.SUCCESS,
}), "local to public: no preflight required.");

promise_test(t => iframeTest(t, {
  source: { server: Server.HTTP_PRIVATE },
  target: { server: Server.HTTP_LOCAL },
  expected: IframeTestResult.FAILURE,
}), "private to local: failure.");

promise_test(t => iframeTest(t, {
  source: { server: Server.HTTP_PRIVATE },
  target: { server: Server.HTTP_PRIVATE },
  expected: IframeTestResult.SUCCESS,
}), "private to private: no preflight required.");

promise_test(t => iframeTest(t, {
  source: { server: Server.HTTP_PRIVATE },
  target: { server: Server.HTTP_PUBLIC },
  expected: IframeTestResult.SUCCESS,
}), "private to public: no preflight required.");

promise_test(t => iframeTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: { server: Server.HTTP_LOCAL },
  expected: IframeTestResult.FAILURE,
}), "public to local: failure.");


promise_test(t => iframeTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: { server: Server.HTTP_PRIVATE },
  expected: IframeTestResult.FAILURE,
}), "public to private: failure.");

promise_test(t => iframeTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: { server: Server.HTTP_PUBLIC },
  expected: IframeTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test(t => iframeTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_LOCAL },
  expected: IframeTestResult.FAILURE,
}), "treat-as-public-address to local: failure.");

promise_test(t => iframeTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PRIVATE },
  expected: IframeTestResult.FAILURE,
}), "treat-as-public-address to private: failure.");

promise_test(t => iframeTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: IframeTestResult.SUCCESS,
}), "treat-as-public-address to public: no preflight required.");
