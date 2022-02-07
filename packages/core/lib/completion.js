function enableTabCompletion(args) {
  args.completion("completion", false);
  args.showCompletionScript();
}

module.exports = { enableTabCompletion };
