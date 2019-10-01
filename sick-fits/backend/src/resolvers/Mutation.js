const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check to see if user is logged in
    const item = await ctx.db.mutation.createItem(
      {
        data: { ...args }
      },
      info
    );

    return item;
  }
};

module.exports = Mutations;
