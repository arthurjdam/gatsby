import * as path from "path"

import { createFileNode } from "../create-file-node"

// FIXME: This test needs to not use snapshots because of file differences
// and locations across users and CI systems
describe(`create-file-node`, () => {
  it(`creates a file node`, () => {
    const createNodeId = jest.fn()
    createNodeId.mockReturnValue(`uuid-from-gatsby`)
    return createFileNode(
      path.resolve(`${__dirname}/fixtures/file.json`),
      createNodeId,
      {}
    )
  })
})
